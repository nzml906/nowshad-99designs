<template>
  <section class="section section-lg section-shaped overflow-hidden my-0">
    <div class="shape shape-style-1 shape-default shape-skew">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container py-0 pb-lg">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-5 mb-5 mb-lg-0">
          <h1 class="text-white font-weight-light">
            Nowshad Ahmed
          </h1>
          <p class="lead text-white mt-4">
            GRAPHIC DESIGNER for the past 08 years. Currently learning some
            tools to become FRONT-END DEVELOPER.
          </p>
          <a
            href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
            class="btn btn-white mt-4"
            >See my designs</a
          >
        </div>
        <div class="col-lg-6 mb-lg-auto">
          <div class="rounded shadow-lg overflow-hidden">
            <b-carousel id="carousel1" controls indicators>
              <!-- Text slides with image -->
              <b-carousel-slide img-src="img/c1.png"></b-carousel-slide>
              <b-carousel-slide img-src="img/c2.png"></b-carousel-slide>
              <b-carousel-slide img-src="img/c3.png"></b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { BCarousel } from 'bootstrap-vue/esm/components/carousel/carousel';
import { BCarouselSlide } from 'bootstrap-vue/esm/components/carousel/carousel-slide';

export default {
  components: {
    BCarousel,
    BCarouselSlide
  }
};
</script>
<style></style>
