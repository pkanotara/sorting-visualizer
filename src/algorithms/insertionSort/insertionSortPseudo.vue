<template>
  <div class="pseudo-code-container">
    <div class="checking">Let's Go!</div>
    <div class="pseudo-code">
      <p class="indent-0">Set the first element as sorted</p>
      <p class="indent-0">For each element (i = 1) in the array do</p>
      <p class="indent-1">Set element i as current</p>
      <p class="indent-1">
        For each element (j = i – 1) down to 0 AND if current < array[j]
      </p>
      <p class="indent-2">Swap element[j] and element[j + 1]</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped src="../../style/pseudoCode.css"></style>
