import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="px-6 max-w-7xl mx-auto pt-8">
      <section class="mb-8 relative">
        <div class="relative flex items-center group">
          <span class="absolute left-4 text-on-surface/40 group-focus-within:text-primary transition-colors">
            <span class="material-symbols-outlined">search</span>
          </span>
          <input 
            type="text" 
            id="search-input" 
            placeholder="搜索艺术家、专辑或风格..." 
            class="w-full bg-surface-container-low border-b border-outline-variant focus:border-primary focus:ring-0 text-sm md:text-base py-4 pl-12 pr-4 transition-all placeholder:text-on-surface/30 outline-none"
            (focus)="isFocused.set(true)"
            (blur)="onBlur()"
          />
          
          @if (isFocused()) {
            <div class="absolute top-full left-0 w-full z-40 bg-surface-container-low p-8 shadow-2xl border-t border-outline-variant/20">
              <h2 class="text-xs font-black tracking-[0.2em] uppercase text-on-surface/30 mb-6 flex items-center justify-between">
                最近搜索记录
                <button class="text-[10px] underline underline-offset-4 hover:text-primary">清除全部</button>
              </h2>
              <ul class="space-y-4">
                <li class="flex items-center justify-between text-sm group cursor-pointer">
                  <span class="flex items-center gap-3 text-on-surface/60 group-hover:text-on-surface transition-colors">
                    <span class="material-symbols-outlined text-base">history</span>
                    Pink Floyd - The Dark Side of the Moon
                  </span>
                  <span class="material-symbols-outlined text-base text-on-surface/20 group-hover:text-primary">close</span>
                </li>
                <li class="flex items-center justify-between text-sm group cursor-pointer">
                  <span class="flex items-center gap-3 text-on-surface/60 group-hover:text-on-surface transition-colors">
                    <span class="material-symbols-outlined text-base">history</span>
                    Radiohead
                  </span>
                  <span class="material-symbols-outlined text-base text-on-surface/20 group-hover:text-primary">close</span>
                </li>
              </ul>
            </div>
          }
        </div>
      </section>

      <section class="mb-10 space-y-6">
        <div class="flex items-center w-full">
          <div class="flex-1 min-w-0 overflow-x-auto no-scrollbar pb-2 -ml-6 pl-6 pr-4">
            <div class="flex gap-3">
              <button class="px-6 py-2 rounded-full bg-primary-container text-on-primary-container text-sm font-medium whitespace-nowrap shrink-0">全部</button>
              <button class="px-6 py-2 rounded-full bg-surface-container-high text-on-surface/70 hover:text-on-surface transition-colors text-sm font-medium whitespace-nowrap shrink-0">黑胶 (Vinyl)</button>
              <button class="px-6 py-2 rounded-full bg-surface-container-high text-on-surface/70 hover:text-on-surface transition-colors text-sm font-medium whitespace-nowrap shrink-0">CD</button>
              <button class="px-6 py-2 rounded-full bg-surface-container-high text-on-surface/70 hover:text-on-surface transition-colors text-sm font-medium whitespace-nowrap shrink-0">磁带 (Cassette)</button>
            </div>
          </div>
          <button class="flex items-center gap-2 text-on-surface/60 hover:text-primary transition-colors shrink-0 pb-2 pl-2">
            <span class="text-xs uppercase font-bold tracking-widest">筛选</span>
            <span class="material-symbols-outlined text-lg">filter_list</span>
          </button>
        </div>
      </section>

      <section class="mt-24 border-t border-outline-variant/20 pt-16">
        <h2 class="text-xs font-black tracking-[0.2em] uppercase text-on-surface/30 mb-8">大家都在搜</h2>
        <div class="flex flex-wrap gap-x-8 gap-y-4">
          <a href="#" class="text-sm md:text-base font-headline hover:text-primary transition-colors"># City Pop</a>
          <a href="#" class="text-sm md:text-base font-headline hover:text-primary transition-colors"># 坂本龙一</a>
          <a href="#" class="text-sm md:text-base font-headline hover:text-primary transition-colors"># Blue Note Jazz</a>
          <a href="#" class="text-sm md:text-base font-headline hover:text-primary transition-colors"># 180g 重磅</a>
          <a href="#" class="text-sm md:text-base font-headline hover:text-primary transition-colors"># 限定彩色盘</a>
          <a href="#" class="text-sm md:text-base font-headline hover:text-primary transition-colors"># 初版首印</a>
        </div>
      </section>
    </div>
  `
})
export class SearchComponent {
  isFocused = signal(false);

  onBlur() {
    setTimeout(() => this.isFocused.set(false), 200);
  }
}
