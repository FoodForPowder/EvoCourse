import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CreatePost } from 'src/app/models/create-post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
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
    private toastr: ToastrService
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

      this.postService.creapePost(postData).subscribe({
        next: (value) => {
          this.toastr.success('Успешно');
        },
        error: () => {
          this.toastr.error('Попробуйте позже', 'Произошла ошибка');
        },
      });
    }
  }
}
