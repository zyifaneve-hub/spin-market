import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-screen-xl mx-auto px-4 md:px-8 pt-8">
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
        <div class="lg:col-span-7 space-y-6">
          <div class="aspect-square bg-surface-container-low overflow-hidden group">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhrPF9CQysenTB44v0AZ9Z98JFP9PiysRjVHKk1wjF3vazp-gOzUjMlwlPq6eXTvTS5mTR7rJMghmEmc6gTrGEx0PhEpEr1FHriCVSRqLdO_LYAhEsXI9kWdDFz4Ba5-SMGctl6u21ndf4pv6YaGMGq-FExOPuWofxGSetW9WCGqa6ujzr0DNagZIqCXdWvEA3-Fs0ZL-uranwV0jIhO3Ul95XEtrHi2nJDp9G9MEW4W1WTupek0Ies1uuwa50vcnZOUGXWc2nmeAW" alt="Rare Vinyl Front Cover" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerpolicy="no-referrer" />
          </div>
        </div>
        
        <div class="lg:col-span-5 flex flex-col">
          <div class="mb-8">
            <span class="inline-block px-2 py-0.5 bg-primary-container/10 text-primary-fixed-dim text-[10px] font-bold tracking-widest uppercase mb-4">Original 1974 Pressing</span>
            <h1 class="font-headline text-3xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-[1.1] mb-2">Dark Side of the Moon</h1>
            <p class="font-headline text-lg md:text-xl text-on-surface/60 font-medium">Pink Floyd</p>
            <div class="mt-6 flex items-baseline gap-2">
              <span class="text-2xl md:text-3xl font-headline font-black text-primary-container">¥4,850</span>
              <span class="text-on-surface/40 text-sm line-through decoration-primary-container/30">¥5,200</span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 mb-8">
            <div class="bg-surface-container-low p-4 border-l-2 border-primary-container">
              <p class="text-[10px] text-on-surface/40 uppercase tracking-widest mb-1">Media Grade</p>
              <p class="text-xl font-headline font-bold text-on-surface">NM</p>
              <p class="text-[10px] text-on-surface/60">Near Mint · 近乎全新</p>
            </div>
            <div class="bg-surface-container-low p-4 border-l-2 border-on-surface/20">
              <p class="text-[10px] text-on-surface/40 uppercase tracking-widest mb-1">Sleeve Grade</p>
              <p class="text-xl font-headline font-bold text-on-surface">VG+</p>
              <p class="text-[10px] text-on-surface/60">Very Good Plus · 极好</p>
            </div>
          </div>

          <div class="space-y-4 mb-8">
            <div class="flex justify-between py-3 border-b border-white/5">
              <span class="text-sm text-on-surface/40">介质</span>
              <span class="text-sm font-medium">12" Vinyl, LP, Album</span>
            </div>
            <div class="flex justify-between py-3 border-b border-white/5">
              <span class="text-sm text-on-surface/40">厂牌</span>
              <span class="text-sm font-medium">Harvest Records</span>
            </div>
            <div class="flex justify-between py-3 border-b border-white/5">
              <span class="text-sm text-on-surface/40">压片年份</span>
              <span class="text-sm font-medium">1974</span>
            </div>
            <div class="flex justify-between py-3 border-b border-white/5">
              <span class="text-sm text-on-surface/40">目录号</span>
              <span class="text-sm font-medium">SHVL 804</span>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-24 max-w-3xl pb-24">
        <h2 class="font-headline text-2xl md:text-3xl font-extrabold mb-8 tracking-tight">聆听历史的裂缝</h2>
        <div class="space-y-6 text-on-surface/80 leading-relaxed font-body text-base md:text-lg">
          <p>这张 1974 年的再版黑胶完美捕捉了 Pink Floyd 鼎盛时期的声音实验。作为 70 年代音响发烧友的试金石，该版本在低频控制力和声场宽度上表现卓越。</p>
          <p>该藏品来自于一位资深伦敦藏家，品相保存极佳。原始的蓝色金字塔贴纸和两张原始海报均完整保留。对于追求“处女听感”的藏家来说，这是不可多得的极品。</p>
        </div>

        <div class="mt-12 p-8 bg-surface-container-lowest border border-white/5 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 class="text-xs font-bold text-primary-container tracking-widest uppercase mb-4">音频特征</h4>
            <ul class="space-y-2 text-sm text-on-surface/60">
              <li>• 全模拟母带压制</li>
              <li>• 180g 重盘材质</li>
              <li>• 无明显底噪 (Silent Background)</li>
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-bold text-primary-container tracking-widest uppercase mb-4">配件清单</h4>
            <ul class="space-y-2 text-sm text-on-surface/60">
              <li>• 原始歌词内页</li>
              <li>• 附赠 2 枚限定贴纸</li>
              <li>• 防静电保护套 (内附)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>

    <div class="fixed bottom-[80px] md:bottom-0 left-0 w-full z-40 bg-surface-container-low/95 backdrop-blur-2xl border-t border-white/5 px-6 py-4 flex items-center justify-between gap-4 md:px-24">
      <button class="flex-grow py-4 bg-surface-container-high text-on-surface font-bold rounded-full flex items-center justify-center gap-2 hover:bg-surface-bright transition-all active:scale-95">
        <span class="material-symbols-outlined text-xl">chat_bubble</span>
        联系卖家
      </button>
      <button class="flex-[2] py-4 bg-primary-container text-on-primary-container font-extrabold rounded-full flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(255,85,64,0.3)] hover:brightness-110 transition-all active:scale-95">
        <span class="material-symbols-outlined text-xl" style="font-variation-settings: 'FILL' 1;">shopping_cart</span>
        加入购物车
      </button>
    </div>
  `
})
export class ProductDetailComponent {}
