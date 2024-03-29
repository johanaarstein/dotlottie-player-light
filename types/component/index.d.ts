import { LitElement } from 'lit';
import { PlayMode, PlayerState } from './types';
import type { AnimationDirection, AnimationItem, AnimationSegment } from 'lottie-web';
import type { Autoplay, Controls, Loop, ObjectFit, PreserveAspectRatio, Subframe } from './types';
export declare class DotLottiePlayer extends LitElement {
    autoplay?: Autoplay;
    background?: string;
    controls?: Controls;
    count?: number;
    currentState?: PlayerState;
    description?: string;
    direction?: AnimationDirection;
    hover?: boolean | undefined;
    intermission?: number | undefined;
    loop?: Loop;
    mode?: PlayMode;
    objectfit?: ObjectFit;
    preserveAspectRatio?: PreserveAspectRatio;
    segment?: AnimationSegment;
    seeker?: number;
    speed?: number;
    src: string;
    subframe?: Subframe;
    protected container: HTMLElement;
    private _io?;
    private _lottie;
    private _prevState?;
    private _counter;
    private _error?;
    load(src: string | Record<string, number | undefined> | JSON): Promise<void>;
    private _onVisibilityChange;
    private _handleSeekChange;
    private isLottie;
    getLottie(): AnimationItem | null;
    play(): void;
    pause(): void;
    stop(): void;
    destroy(): void;
    seek(value: number | string): void;
    setSubframe(value: boolean): void;
    private freeze;
    reload(): Promise<void>;
    setSpeed(value?: number): void;
    setDirection(value: AnimationDirection): void;
    setLooping(value: boolean): void;
    togglePlay(): void;
    toggleLooping(): void;
    toggleBoomerang(): void;
    static get styles(): import("lit").CSSResult;
    connectedCallback(): void;
    protected firstUpdated(): Promise<void>;
    disconnectedCallback(): void;
    protected renderControls(): import("lit").TemplateResult<1>;
    protected render(): import("lit").TemplateResult<1>;
}
//# sourceMappingURL=index.d.ts.map