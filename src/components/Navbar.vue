<template>
  <header id="header">
    <div class="w-full flex items-center py-6">
      <div class="container">
        <div class="flex justify-between">
          <div class="">
            <router-link class="font-semibold" to="/">
              Technical Test
            </router-link>
          </div>
          <div class="flex items-center">
            <nav>
              <ul>
                <li>
                  <router-link class="font-semibold py-2 mx-8" to="/"
                    >Home</router-link
                  >
                  <router-link class="font-semibold py-2 mx-8" to="/list"
                    >List</router-link
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>
