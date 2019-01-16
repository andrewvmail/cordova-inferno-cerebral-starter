import { Swiper, SwiperSlide, Page, Button } from "framework7-react";

const WelcomePage = () => (
  <Page>
    <Swiper>
      <SwiperSlide>Hello World 1</SwiperSlide>
      <SwiperSlide style="display:flex;justify-content: center;align-items: center;height:100vh;">
        <Button big center fill color="blue">
          Continue
        </Button>
      </SwiperSlide>
    </Swiper>
  </Page>
);

export default WelcomePage;
