import { ElementRef } from '@angular/core';
import { AfterAppendSubHtmlDetail, AfterCloseDetail, AfterOpenDetail, AfterSlideDetail, BeforeCloseDetail, BeforeNextSlideDetail, BeforeOpenDetail, BeforePrevSlideDetail, BeforeSlideDetail, ContainerResizeDetail, DragEndDetail, DragMoveDetail, DragStartDetail, FlipHorizontalDetail, FlipVerticalDetail, InitDetail, PosterClickDetail, RotateLeftDetail, RotateRightDetail, SlideItemLoadDetail } from 'lightgallery/lg-events';
import { LightGallerySettings } from 'lightgallery/lg-settings';
import * as i0 from "@angular/core";
export declare class LightgalleryComponent {
    private _elementRef;
    private LG;
    private lgInitialized;
    constructor(_elementRef: ElementRef);
    settings: LightGallerySettings;
    onAfterAppendSlide?: (detail: AfterSlideDetail) => void;
    onInit?: (detail: InitDetail) => void;
    onHasVideo?: (detail: InitDetail) => void;
    onContainerResize?: (detail: ContainerResizeDetail) => void;
    onAfterAppendSubHtml?: (detail: AfterAppendSubHtmlDetail) => void;
    onBeforeOpen?: (detail: BeforeOpenDetail) => void;
    onAfterOpen?: (detail: AfterOpenDetail) => void;
    onSlideItemLoad?: (detail: SlideItemLoadDetail) => void;
    onBeforeSlide?: (detail: BeforeSlideDetail) => void;
    onAfterSlide?: (detail: AfterSlideDetail) => void;
    onPosterClick?: (detail: PosterClickDetail) => void;
    onDragStart?: (detail: DragStartDetail) => void;
    onDragMove?: (detail: DragMoveDetail) => void;
    onDragEnd?: (detail: DragEndDetail) => void;
    onBeforeNextSlide?: (detail: BeforeNextSlideDetail) => void;
    onBeforePrevSlide?: (detail: BeforePrevSlideDetail) => void;
    onBeforeClose?: (detail: BeforeCloseDetail) => void;
    onAfterClose?: (detail: AfterCloseDetail) => void;
    onRotateLeft?: (detail: RotateLeftDetail) => void;
    onRotateRight?: (detail: RotateRightDetail) => void;
    onFlipHorizontal?: (detail: FlipHorizontalDetail) => void;
    onFlipVertical?: (detail: FlipVerticalDetail) => void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    private registerEvents;
    static ɵfac: i0.ɵɵFactoryDeclaration<LightgalleryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LightgalleryComponent, "lightgallery", never, { "settings": { "alias": "settings"; "required": false; }; "onAfterAppendSlide": { "alias": "onAfterAppendSlide"; "required": false; }; "onInit": { "alias": "onInit"; "required": false; }; "onHasVideo": { "alias": "onHasVideo"; "required": false; }; "onContainerResize": { "alias": "onContainerResize"; "required": false; }; "onAfterAppendSubHtml": { "alias": "onAfterAppendSubHtml"; "required": false; }; "onBeforeOpen": { "alias": "onBeforeOpen"; "required": false; }; "onAfterOpen": { "alias": "onAfterOpen"; "required": false; }; "onSlideItemLoad": { "alias": "onSlideItemLoad"; "required": false; }; "onBeforeSlide": { "alias": "onBeforeSlide"; "required": false; }; "onAfterSlide": { "alias": "onAfterSlide"; "required": false; }; "onPosterClick": { "alias": "onPosterClick"; "required": false; }; "onDragStart": { "alias": "onDragStart"; "required": false; }; "onDragMove": { "alias": "onDragMove"; "required": false; }; "onDragEnd": { "alias": "onDragEnd"; "required": false; }; "onBeforeNextSlide": { "alias": "onBeforeNextSlide"; "required": false; }; "onBeforePrevSlide": { "alias": "onBeforePrevSlide"; "required": false; }; "onBeforeClose": { "alias": "onBeforeClose"; "required": false; }; "onAfterClose": { "alias": "onAfterClose"; "required": false; }; "onRotateLeft": { "alias": "onRotateLeft"; "required": false; }; "onRotateRight": { "alias": "onRotateRight"; "required": false; }; "onFlipHorizontal": { "alias": "onFlipHorizontal"; "required": false; }; "onFlipVertical": { "alias": "onFlipVertical"; "required": false; }; }, {}, never, ["*"], false, never>;
}
