<template>
    <div class="profile">
      <Navbar />
      <div class="main-content">
        <div class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-12 col-lg-10 col-xl-8">
    
                <!-- Header -->
                <div class="header mt-md-5">
                  <div class="header-body">
                    <div class="row align-items-center">
                      <div class="col">
    
                        <!-- Pretitle -->
                        <h6 class="header-pretitle">
                          Overview
                        </h6>
    
                        <!-- Title -->
                        <h1 class="header-title">
                          Account
                        </h1>
    
                      </div>
                    </div>
                  </div>
                </div>
    
                <!-- Form -->
                <form>
    
                  <div class="row justify-content-between align-items-center">
                    <div class="col">
                      <div class="row align-items-center">
                        <div class="col-auto">
    
                          <!-- Avatar -->
                          <div class="avatar">
                            <img class="avatar-img rounded-circle" src="@/assets/img/avatars/profiles/avatar-1.jpg" alt="...">
                          </div>
    
                        </div>
                        <div class="col ms-n2">
    
                          <!-- Heading -->
                          <h4 class="mb-1">
                            Your avatar
                          </h4>
    
                          <!-- Text -->
                          <small class="text-body-secondary">
                            PNG or JPG no bigger than 1000px wide and tall.
                          </small>
    
                        </div>
                      </div> <!-- / .row -->
                    </div>
                    <div class="col-auto">
    
                      <!-- Button -->
                      <button class="btn btn-sm btn-primary">
                        Upload
                      </button>
    
                    </div>
                  </div> <!-- / .row -->
    
                  <!-- Divider -->
                  <hr class="my-5">
    
                  <div class="row">
                    <div class="col-12 col-md-6">
    
                      <!-- First name -->
                      <div class="form-group">
    
                        <!-- Label -->
                        <label class="form-label">
                          First name
                        </label>
    
                        <!-- Input -->
                        <input type="text" class="form-control">
    
                      </div>
    
                    </div>
                    <div class="col-12 col-md-6">
    
                      <!-- Last name -->
                      <div class="form-group">
    
                        <!-- Label -->
                        <label class="form-label">
                          Last name
                        </label>
    
                        <!-- Input -->
                        <input type="text" class="form-control">
    
                      </div>
    
                    </div>
                    <div class="col-12">
    
                      <!-- Email address -->
                      <div class="form-group">
    
                        <!-- Label -->
                        <label class="mb-1">
                          Email address
                        </label>
    
                        <!-- Form text -->
                        <small class="form-text text-body-secondary">
                          This contact will be shown to others publicly, so choose it carefully.
                        </small>
    
                        <!-- Input -->
                        <input type="email" class="form-control">
    
                      </div>
    
                    </div>
                    <div class="col-12 col-md-6">
    
                      <!-- Phone -->
                      <div class="form-group">
    
                        <!-- Label -->
                        <label class="form-label">
                          Phone
                        </label>
    
                        <!-- Input -->
                        <input type="text" class="form-control mb-3" placeholder="(___)___-____" data-inputmask="'mask': '(999)999-9999'">
    
                      </div>
    
                    </div>
                    <div class="col-12 col-md-6">
    
                      <!-- Birthday -->
                      <div class="form-group">
    
                        <!-- Label -->
                        <label class="form-label">
                          Birthday
                        </label>
    
                        <!-- Input -->
                        <input type="text" class="form-control" data-flatpickr>
    
                      </div>
    
                    </div>
                  </div> <!-- / .row -->
    
                  <!-- Button -->
                  <button class="btn btn-primary">
                    Save changes
                  </button>
    
                  <!-- Divider -->
                  <hr class="mt-4 mb-5">
    
                  <div class="row justify-content-between">
                    <div class="col-12 col-md-6">
    
                      <!-- Heading -->
                      <h4>
                        Delete your account
                      </h4>
    
                      <!-- Text -->
                      <p class="small text-body-secondary mb-md-0">
                        Please note, deleting your account is a permanent action and will no be recoverable once completed.
                      </p>
    
                    </div>
                    <div class="col-auto">
    
                      <!-- Button -->
                      <button class="btn btn-danger">
                        Delete
                      </button>
    
                    </div>
                  </div> <!-- / .row -->
    
                </form>
    
                <br><br>
    
              </div>
            </div> <!-- / .row -->
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar'
  
  export default {
    name: 'ProfileView',
    components: {
      Navbar
    }
  }
  </script>
  
  <style lang="scss" scoped>
      .profile{
          min-height: 100dvh;
      }
  </style>