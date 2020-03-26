<template>
  <section class="section section-components">
    <div class="container">
      <h3 class="h4 text-success font-weight-bold mb-4">Tabs</h3>
      <div class="row justify-content-center">
        <!-- Tab 1 -->
        <div class="col-lg-6">
          <div class="mb-3">
            <small class="text-uppercase font-weight-bold">With icons</small>
          </div>

          <tabs fill class="flex-column flex-md-row">
            <card shadow>
              <tab-pane title="Home">
                <p class="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                  cleanse. Mustache cliche tempor, williamsburg carles vegan
                  helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                  synth.
                </p>
                <p class="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                  cleanse.
                </p>
              </tab-pane>

              <tab-pane title="Profile">
                <p class="description">
                  Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                  Aliquip placeat salvia cillum iphone. Seitan aliquip quis
                  cardigan american apparel, butcher voluptate nisi qui.
                </p>
              </tab-pane>

              <tab-pane title="Messages">
                <p class="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                  cleanse. Mustache cliche tempor, williamsburg carles vegan
                  helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                  synth.
                </p>
              </tab-pane>
            </card>
          </tabs>
        </div>

        <!-- Tab 2 -->
        <div class="col-lg-6 mt-5 mt-lg-0">
          <div class="mb-3">
            <small class="text-uppercase font-weight-bold">With text</small>
          </div>
          <tabs fill class="flex-column flex-md-row">
            <card shadow>
              <tab-pane title="Home">
                <p class="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                  cleanse. Mustache cliche tempor, williamsburg carles vegan
                  helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                  synth.
                </p>
                <p class="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                  cleanse.
                </p>
              </tab-pane>

              <tab-pane title="Profile">
                <p class="description">
                  Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                  Aliquip placeat salvia cillum iphone. Seitan aliquip quis
                  cardigan american apparel, butcher voluptate nisi qui.
                </p>
              </tab-pane>

              <tab-pane title="Messages">
                <p class="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                  cleanse. Mustache cliche tempor, williamsburg carles vegan
                  helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                  synth.
                </p>
              </tab-pane>
            </card>
          </tabs>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Tabs from './Tabsection/Tabs.vue';
import TabPane from './Tabsection/TabPane.vue';

export default {
  components: {
    TabPane,
    Tabs
  }
};
</script>
<style></style>
