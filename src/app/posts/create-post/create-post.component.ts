import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreatePost } from 'src/app/models/create-post';
import { ExtendedPost } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  isEditMode: boolean = false;
  postId: string | null = null;
  postTitle!: string;
  postForm = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
    timeCooking: ['', Validators.required],
    tags: ['', Validators.required],
    foodValue: this.fb.group({
      proteins: ['', Validators.required],
      fats: ['', Validators.required],
      carbohydrates: ['', Validators.required],
      calories: ['', Validators.required],
    }),
    cookingSteps: this.fb.array([
      this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
      }),
    ]),
    ingredients: this.fb.array([
      this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
      }),
    ]),
  });
  constructor(
    private fb: FormBuilder,
    private postService: PostsService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  get cookingStepsArray(): FormArray {
    return this.postForm.get('cookingSteps') as FormArray;
  }

  get ingredientsArray(): FormArray {
    return this.postForm.get('ingredients') as FormArray;
  }

  addCookingStep(): void {
    this.cookingStepsArray.push(
      this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
      })
    );
  }

  removeCookingStep(index: number): void {
    this.cookingStepsArray.removeAt(index);
  }

  addIngredient(): void {
    this.ingredientsArray.push(
      this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
      })
    );
  }

  removeIngredient(index: number): void {
    this.ingredientsArray.removeAt(index);
  }
  onSubmit() {
    if (this.postForm.valid) {
      const formValues = this.postForm.getRawValue();

      const tagsArray =
        typeof formValues.tags === 'string'
          ? formValues.tags.split(',').map((tag) => tag.trim())
          : formValues.tags || [];

      const postData: CreatePost = {
        title: formValues.title || '',
        body: formValues.body || '',
        tags: tagsArray,
        image: '',
        timeCooking: Number(formValues.timeCooking || 0),
        foodValue: {
          proteins: Number(formValues.foodValue?.proteins || 0),
          fats: Number(formValues.foodValue?.fats || 0),
          carbohydrates: Number(formValues.foodValue?.carbohydrates || 0),
          calories: Number(formValues.foodValue?.calories || 0),
        },
        cookingSteps: (formValues.cookingSteps || []).map((step) => ({
          title: step?.title || '',
          description: step?.description || '',
        })),
        ingredients: (formValues.ingredients || []).map((ingredient) => ({
          title: ingredient?.title || '',
          description: ingredient?.description || '',
        })),
      };
      console.log('123123');
      if (this.isEditMode && this.postId) {
        this.postService.updatePost(this.postId, postData).subscribe({
          next: () => {
            this.toastr.success('Успешно');
            this.router.navigate(['/admin/recipes']);
          },
          error: () => {
            this.toastr.error('Попробуйте позже', 'Произошла ошибка');
          },
        });
      } else {
        this.postService.creapePost(postData).subscribe({
          next: () => {
            this.toastr.success('Успешно');
          },
          error: () => {
            this.toastr.error('Попробуйте позже', 'Произошла ошибка');
          },
        });
      }
    }
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.postId = params.get('id');

      if (this.postId) {
        this.isEditMode = true;
        this.loadPostData(this.postId);
      }
    });
  }

  loadPostData(id: string): void {
    this.postService.getPostById(id).subscribe({
      next: (post: ExtendedPost) => {
        this.postTitle = post.title
        this.postForm.patchValue({
          title: post.title,
          body: post.body,
          timeCooking: post.timeCooking.toString(),
          tags: post.tags.join(', '),
          foodValue: {
            proteins: post.foodValue.proteins.toString(),
            fats: post.foodValue.fats.toString(),
            carbohydrates: post.foodValue.carbohydrates.toString(),
            calories: post.foodValue.calories.toString(),
          },
        });

        while (this.cookingStepsArray.length) {
          this.cookingStepsArray.removeAt(0);
        }

        while (this.ingredientsArray.length) {
          this.ingredientsArray.removeAt(0);
        }

        if (post.cookingSteps && post.cookingSteps.length > 0) {
          post.cookingSteps.forEach((step) => {
            this.cookingStepsArray.push(
              this.fb.group({
                title: [step.title, Validators.required],
                description: [step.description, Validators.required],
              })
            );
          });
        } else {
          this.addCookingStep();
        }
        if (post.ingredients && post.ingredients.length > 0) {
          post.ingredients.forEach((ingredient) => {
            this.ingredientsArray.push(
              this.fb.group({
                title: [ingredient.title, Validators.required],
                description: [ingredient.description, Validators.required],
              })
            );
          });
        } else {
          this.addIngredient();
        }
      },
      error: () => {
        this.toastr.error('Попробуйте позже', 'Произошла ошибка');
      },
    });
  }
}
