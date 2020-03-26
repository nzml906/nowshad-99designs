<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type="" effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="img/brand/nowico.png" alt="logo" />
      </router-link>

      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <a href="#">
            <img src="img/brand/nowblue.png" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
          <a
            slot="title"
            href="#"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="ni ni-ui-04 d-lg-none"></i>
            <span class="nav-link-inner--text">PORTFOLIO</span>
          </a>
          <div class="dropdown-menu-inner">
            <router-link to="/portfolio">
              <a
                href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                class="media d-flex align-items-center"
                style="margin: 20px;"
              >
                <div
                  class="icon icon-shape bg-gradient-primary rounded-circle text-white"
                >
                  <i class="ni ni-spaceship"></i>
                </div>
                <div class="media-body ml-3">
                  <h6 class="heading text-primary mb-md-1">
                    Contest winning
                  </h6>

                  <p class="description d-none d-md-inline-block mb-0">
                    Logo | Brand Identity | Graphic design
                  </p>
                </div>
              </a>
            </router-link>
            <router-link to="/one-to-one">
              <a
                href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                class="media d-flex align-items-center"
                style="margin: 20px;"
              >
                <div
                  class="icon icon-shape bg-gradient-warning rounded-circle text-white"
                >
                  <i class="ni ni-ui-04"></i>
                </div>
                <div class="media-body ml-3">
                  <h5 class="heading text-warning mb-md-1">
                    One-To-One projects
                  </h5>
                  <p class="description d-none d-md-inline-block mb-0">
                    Business brand identity design | Product design
                  </p>
                </div>
              </a>
            </router-link>
            <router-link to="/one-to-one">
              <a
                href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                class="media d-flex align-items-center"
                style="margin: 20px;"
              >
                <div
                  class="icon icon-shape bg-gradient-primary rounded-circle text-white"
                >
                  <i class="ni ni-spaceship"></i>
                </div>
                <div class="media-body ml-3">
                  <h6 class="heading text-primary mb-md-1">
                    Designs for sale
                  </h6>
                  <p class="description d-none d-md-inline-block mb-0">
                    Ready made logo and icon for sale. Hurry up!
                  </p>
                </div>
              </a>
            </router-link>
          </div>
        </base-dropdown>

        <base-dropdown tag="li" class="nav-item">
          <a
            slot="title"
            href="#"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="ni ni-collection d-lg-none"></i>
            <span class="nav-link-inner--text">MORE</span>
          </a>
          <router-link to="/profile" class="dropdown-item">Profile</router-link>
          <router-link to="/landing" class="dropdown-item">Facts</router-link>
        </base-dropdown>
      </ul>

      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.facebook.com/nowshad666/"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Like us on Facebook"
          >
            <i class="fa fa-facebook-square"></i>
            <span class="nav-link-inner--text d-lg-none">Facebook</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.facebook.com/nowshad666/"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Follow us on Instagram"
          >
            <i class="fa fa-instagram"></i>
            <span class="nav-link-inner--text d-lg-none">Instagram</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.facebook.com/nowshad666/"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Follow us on Twitter"
          >
            <i class="fa fa-twitter-square"></i>
            <span class="nav-link-inner--text d-lg-none">Twitter</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.facebook.com/nowshad666/"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Star us on Github"
          >
            <i class="fa fa-github"></i>
            <span class="nav-link-inner--text d-lg-none">Github</span>
          </a>
        </li>
        <li class="nav-item d-none d-lg-block ml-lg-4">
          <router-link to="/landing">
            <a
              href="https://www.creative-tim.com/product/vue-argon-design-system"
              target="_blank"
              rel="noopener"
              class="btn btn-neutral btn-icon"
            >
              <!-- <span class="btn-inner--icon">
              <i class="fa fa-cloud-download mr-2"></i>
            </span> -->
              <span class="nav-link-inner--text">About</span>
            </a>
          </router-link>
        </li>
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from '@/components/BaseNav';
import BaseDropdown from '@/components/BaseDropdown';
import CloseButton from '@/components/CloseButton';

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style></style>
