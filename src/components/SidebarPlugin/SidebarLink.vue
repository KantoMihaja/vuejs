<template>
  <li class="md-list-item">
    <router-link
      class="md-list-item-router md-list-item-container md-button-clean"
      @click="hideSidebar"
      v-bind="$attrs"
    >
      <div class="md-list-item-content md-ripple">
        <slot>
          <md-icon>{{ link.icon }}</md-icon>
          <p>{{ link.name }}</p>
        </slot>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  inject: {
    autoClose: {
      default: true,
    },
  },
  props: {
    link: {
      type: [String, Object],
      default: () => ({
        name: "",
        path: "",
        icon: "",
      }),
    },
    tag: {
      type: String,
      default: "router-link",
    },
  },
  methods: {
    hideSidebar() {
      // Assurez-vous que $sidebar existe avant de l'utiliser
      if (
        this.autoClose &&
        this.$sidebar &&
        typeof this.$sidebar.displaySidebar === "function" &&
        this.$sidebar.showSidebar === true
      ) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>

<style scoped>
/* Personnalisez votre style ici */
.md-list-item-router {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
}

.md-list-item-container {
  width: 100%;
}

.md-list-item-content {
  display: flex;
  align-items: center;
}

.md-icon {
  margin-right: 10px;
}

.md-ripple {
  /* Ajoutez votre style pour le ripple ici */
}
</style>
