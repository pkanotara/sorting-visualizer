<template>
  <div class="pseudo-code-container">
    <div class="checking">Let's Go!</div>
    <div class="pseudo-code">
      <p class="indent-0">For each element i in the array, do</p>
      <p class="indent-1">Set value i as minimum</p>
      <p class="indent-1">
        For each element j that is not yet sorted, do
      </p>
      <p class="indent-2">If j < minimum, then</p>
      <p class="indent-3">Set value j as minimum</p>
      <p class="indent-1">If value i and minimum are different, then</p>
      <p class="indent-2">Swap value i and minimum</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped src="../../style/pseudoCode.css"></style>
