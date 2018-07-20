import { Component, OnInit } from '@angular/core';

interface Slide {
  title: string;
  text: string;
  url: string;
}

@Component({
  selector: 'app-slider',
  template: `
  <div class="slideshow-container fade" style="margin-top: 20px; margin-bottom: 20px">
    <div class="mySlides">
      <img src="{{ currentSlide.url }}" style="width:100%" *ngIf="currentSlide.url">
      <div class="slide-item-content">
        <div class="slide-item-title">{{ currentSlide.title }}</div>
        <div class="slide-item-text">{{ currentSlide.text }}</div>
      </div>
    </div>

    <!-- Next and previous buttons -->
    <a class="prev" (click)="showRightSide()">&#10094;</a>
    <a class="next" (click)="showLeftSide()">&#10095;</a>
</div>
  `,
  styles: [`
  * {box-sizing:border-box}
  /* Slideshow container */
  .slideshow-container {
    height: 440px;
    width: 100%;
    position: relative;
    margin: auto;
  }
  .slideshow-container::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 43%,rgba(0,0,0,0.65) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 43%,rgba(0,0,0,0.65) 100%) !important;
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 ); /* IE6-9 */
    content: "";
  }
  img {
    background: 50%/cover !important;
    background-position: center center;
    width: auto;
    height: 440px;
  }
  .slide-item-content {
    margin: 30px;
    position: absolute;
    top: 240px;
    color: white;
  }
  .slide-item-title {
    padding-top: 32px;,
    padding-bottom: 32px;
    font-size: 36px;
    font-weight: 700;
  }
  .slide-item-text {
    font-size: 15px;
  }
  /* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}
  /* Fading animation */
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }
`]
})
export class SliderComponent implements OnInit {
  slideIndex = 0;
  currentSlide: Slide;

  slides: Slide[] = [
    {
      title: '다시는 보기 힘든 마감 임박 펀딩 모음',
      text: '마지막 기회를 놓치지 마세요!',
      url: 'https://cdn.wadiz.kr/ft/images/green001/2018/0709/20180709161418629_476.jpg/wadiz/format/jpg/quality/95/optimize'
    },
    {
      title: '카펫 위에 커피 쏟아도 혼날 걱정 없어요',
      text: '스위틀 물청소기 슥해주면 말끔해지니까요',
      url: 'https://cdn.wadiz.kr/ft/images/green001/2018/0720/20180720105620679_490.jpg/wadiz/format/jpg/quality/95/optimize'
    },
    {
      title: '드루와 드루와 방에 넣어주기만 하면 끝',
      text: '나도 들어가고 싶은 뽀송뽀송 팝펫 드라이룸',
      url: 'https://cdn.wadiz.kr/ft/images/green001/2018/0720/20180720105747550_492.jpg/wadiz/format/jpg/quality/95/optimize'
    },
    {
      title: '음식물 쓰레기 처리의 신세계를 보여드릴게요',
      text: '봉투 한 장만 툭 걸어두면 끝이랍니다',
      url: 'https://cdn.wadiz.kr/ft/images/green001/2018/0720/20180720105940289_493.jpg/wadiz/format/jpg/quality/95/optimize'
    },
    {
      title: '아직도 휴지로 닦으세요?',
      text: '남녀노소 쓸 수 있는 가장 깨끗한 청결티슈',
      url: 'https://cdn.wadiz.kr/ft/images/green001/2018/0720/20180720110145444_489.jpg/wadiz/format/jpg/quality/95/optimize'
    },
    {
      title: '얼굴 골격이 클수록 잘 어울리는 안경',
      text: '옹졸한 안경 크기에 상한 마음을 달래줄게요',
      url: 'https://cdn.wadiz.kr/ft/images/green001/2018/0720/20180720110237575_488.jpg/wadiz/format/jpg/quality/95/optimize'
    },
    {
      title: '앗! 신발 안 신고 나왔다 아니네? 신었네',
      text: '너무 편해서 신은 것조차 까먹게 만드는 슬립온',
      url: 'https://cdn.wadiz.kr/ft/images/green001/2018/0720/20180720110346567_495.jpg/wadiz/format/jpg/quality/95/optimize'
    },
    {
      title: '세계 시계제조 3대 강국의 명성을 담았어요',
      text: '손목 자랑하고 싶게 만드는 해리엇워치스',
      url: 'https://cdn.wadiz.kr/ft/images/green001/2018/0720/20180720110559328_494.jpg/wadiz/format/jpg/quality/95/optimize'
    }
  ];

  constructor() {
    this.currentSlide = this.slides[this.slideIndex];
  }

  ngOnInit() {
    setInterval(() => {
      // console.log(this.slideIndex);
      if (this.slideIndex < this.slides.length - 1) {
        this.slideIndex++;
      } else if (this.slideIndex === this.slides.length - 1) {
        this.slideIndex = 0;
      }
      this.currentSlide = this.slides[this.slideIndex];
    }, 3333);
  }
  showRightSide() {
    this.slideIndex++;
    console.log(this.slideIndex);
    this.currentSlide = this.slides[this.slideIndex];
  }
  showLeftSide() {
    this.slideIndex--;
    this.currentSlide = this.slides[this.slideIndex];
  }
}
