<template>
    <div class="w-1/2 max-w-screen-lg m-auto pt-20">
      <div class="mb-4">
        <label for="search-modal" class="inline-block text-gray-700 w-full py-2.5 input input-primary input-bordered font-bold">Where to?</label> 
        <input type="checkbox" id="search-modal" class="modal-toggle"> 
        <div class="modal">
          <div class="modal-box bg-white h-full">
                <div>
                  <simple-suggest />
                </div>
            <div class="modal-action">
              <label for="search-modal" class="btn">Close</label>
            </div>
          </div>
        </div>
      </div>
    </div> 
</template>

<script>
export default {}
</script>
