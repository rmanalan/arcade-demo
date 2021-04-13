import { DEMO_HERO_IMG_URL } from "../../constants";
import { Customers } from "./Customers";
import { Header } from "./Header";
import { MobileMenu } from "./MobileMenu";

const localDemoVideoUrl = process.env.DEMO_HERO_IMG_URL;

export function Hero({
  demoImgUrl,
  demoVideoUrl,
}: {
  demoImgUrl?: string;
  demoVideoUrl?: string;
}) {
  return (
    <>
      <div className="bg-gray-50">
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
            <div className="relative h-full">
              <BackgroundSVG />
            </div>
          </div>

          <div className="relative pt-6 pb-16 sm:pb-24">
            <Header />
            <MobileMenu />

            <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Capture your product</span>
                  <span className="block text-indigo-600">in action</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex flex-col" aria-hidden="true">
              <div className="flex-1"></div>
              <div className="flex-1 w-full bg-gray-800"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              {demoVideoUrl || localDemoVideoUrl ? (
                <video
                  className="relative rounded-lg shadow-lg"
                  loop
                  autoPlay
                  muted
                >
                  <source
                    src={demoVideoUrl || localDemoVideoUrl}
                    type="video/webm"
                  />
                </video>
              ) : (
                <img
                  className="relative rounded-lg shadow-lg"
                  src={demoImgUrl || DEMO_HERO_IMG_URL}
                  alt="App screenshot"
                />
              )}
            </div>
          </div>
        </div>
        <Customers />
      </div>
    </>
  );
}

function BackgroundSVG() {
  return (
    <svg
      className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
      width="404"
      height="784"
      fill="none"
      viewBox="0 0 404 784"
    >
      <defs>
        <pattern
          id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width="4"
            height="4"
            className="text-gray-200"
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        width="404"
        height="784"
        fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)"
      />
    </svg>
  );
}
