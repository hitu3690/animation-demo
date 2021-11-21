import { AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-blowser',
  templateUrl: './blowser.component.html',
  styleUrls: ['./blowser.component.scss']
})
export class BlowserComponent implements DoCheck, OnInit, AfterViewInit, AfterViewChecked {
  @ViewChildren('contents') contents!: QueryList<ElementRef>;
  @ViewChild('wrapper') wrapper!: ElementRef;
  dummies: any[] = [
    { title: 'タイトルテキスト', text: 'ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。', img: 'https://cdn.pixabay.com/photo/2021/10/05/14/32/ocean-6682870_1280.jpg' },
    { title: 'タイトルテキスト', text: 'ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。', img: 'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg' },
    { title: 'タイトルテキスト', text: 'ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。', img: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg' },
  ]

  @HostListener('window:scroll', ['$event.target']) onWindowScroll(event: any) {
    const contents = this.contents.toArray()
    for (let i = 0; i < contents.length; i++) {
      const getElementDistace = contents[i].nativeElement.getBoundingClientRect().top + contents[i].nativeElement.clientHeight * .6
      if (window.innerHeight > getElementDistace) {
        contents[i].nativeElement.classList.add('show')
      }
    }
  }

  constructor() { }
  ngDoCheck(): void { }
  ngOnInit(): void { }
  ngAfterViewInit(): void { }
  ngAfterViewChecked(): void { }
}
