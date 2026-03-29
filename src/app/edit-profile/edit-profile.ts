import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, RouterLink],
  template: `
    <div class="px-6 max-w-3xl mx-auto pt-8 pb-24">
      <div class="mb-12 flex items-center gap-4">
        <a routerLink="/profile" class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors">
          <span class="material-symbols-outlined">arrow_back</span>
        </a>
        <div>
          <h1 class="font-headline text-3xl md:text-4xl font-black tracking-tight text-on-surface uppercase">编辑资料</h1>
          <p class="text-on-surface/50 font-body text-sm mt-1">更新您的个人信息</p>
        </div>
      </div>

      <form [formGroup]="profileForm" (ngSubmit)="onSubmit()" class="space-y-8">
        <!-- 头像上传 -->
        <section class="bg-surface-container-low p-6 md:p-8 rounded-2xl border border-on-surface/5 flex flex-col items-center">
          <div class="relative group mb-6">
            <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-surface-container-high relative">
              @if (imagePreview()) {
                <img [src]="imagePreview()" class="w-full h-full object-cover" />
              } @else {
                <div class="w-full h-full bg-surface-container flex items-center justify-center">
                  <span class="material-symbols-outlined text-4xl text-on-surface/40">person</span>
                </div>
              }
              <div 
                class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                (click)="fileInput.click()"
              >
                <span class="material-symbols-outlined text-white text-2xl">photo_camera</span>
              </div>
            </div>
            <input #fileInput type="file" accept="image/*" class="hidden" (change)="onFileSelected($event)">
          </div>
          <p class="text-xs text-on-surface/50 text-center">点击头像更换图片<br>支持 JPG, PNG 格式</p>
        </section>

        <!-- 基本信息 -->
        <section class="bg-surface-container-low p-6 md:p-8 rounded-2xl border border-on-surface/5">
          <h2 class="font-headline text-xl font-bold mb-6 flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">person</span>
            基本信息
          </h2>
          <div class="space-y-6">
            <div class="space-y-2">
              <label class="text-xs font-bold tracking-widest uppercase text-on-surface/60">昵称 (Username) *</label>
              <input type="text" formControlName="username" class="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 focus:border-primary focus:ring-0 outline-none transition-colors" placeholder="您的显示名称">
            </div>
            <div class="space-y-2">
              <label class="text-xs font-bold tracking-widest uppercase text-on-surface/60">所在地 (Location)</label>
              <input type="text" formControlName="location" class="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 focus:border-primary focus:ring-0 outline-none transition-colors" placeholder="例如: 北京, 中国">
            </div>
            <div class="space-y-2">
              <label class="text-xs font-bold tracking-widest uppercase text-on-surface/60">个人简介 (Bio)</label>
              <textarea formControlName="bio" rows="4" class="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 focus:border-primary focus:ring-0 outline-none transition-colors resize-none" placeholder="介绍一下您的音乐品味、收藏偏好等..."></textarea>
            </div>
          </div>
        </section>

        <div class="pt-6 flex gap-4">
          <button type="button" 
            (click)="onCancel()"
            class="flex-1 py-4 bg-surface-container text-on-surface font-headline font-extrabold text-lg rounded-full hover:bg-surface-container-high transition-all active:scale-95">
            取消
          </button>
          <button type="submit" 
            class="flex-[2] py-4 bg-primary text-on-primary font-headline font-extrabold text-lg rounded-full shadow-[0_10px_30px_rgba(255,85,64,0.3)] hover:brightness-110 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:brightness-100 disabled:active:scale-100"
            [disabled]="!profileForm.valid">
            保存修改
          </button>
        </div>
      </form>
    </div>
  `
})
export class EditProfileComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  // Initialize with some mock data matching the profile page
  profileForm = this.fb.group({
    username: ['Audiophile Prime', Validators.required],
    location: [''],
    bio: [''],
    avatar: ['https://lh3.googleusercontent.com/aida-public/AB6AXuB973z5m_Umo8wRZO5jgorIIjWJn8hVUaH0vU0SWo02ilX5BvEppKJmxbjYFKihLEM3ccds3DksCZatL3YcCCBQGhb-B_MotGSlTJtAiogL3JWHVoZ67nRBJa-0NQjBoqTRrFIghoc7TQTbQrSAX7Mj7VDWfzRPL6o04vmClFI9NZCJSi5H676ARrQnPEAs48EsO6UEXB2zEEpSvXjmtREFJR30u3yjDLprDWJIWAAu4sfk-lztmqUVWzSG3v0fD5UPWXoc2Mn_KAEf']
  });

  imagePreview = signal<string | null>(this.profileForm.get('avatar')?.value || null);

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (!file.type.startsWith('image/')) {
        alert('请上传图片文件');
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        this.imagePreview.set(result);
        this.profileForm.patchValue({ avatar: result });
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Profile Updated:', this.profileForm.value);
      alert('资料更新成功！');
      this.router.navigate(['/profile']);
    } else {
      this.profileForm.markAllAsTouched();
    }
  }

  onCancel() {
    this.router.navigate(['/profile']);
  }
}
