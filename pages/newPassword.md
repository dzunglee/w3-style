---
layout: guest
title: New Password
permalink: /new-password/
---
<div class="w3-new-pwd d-flex align-items-center justify-content-center new-pw-container">
    <div class="row text-center">
        <div class="col">
            <div class="logo">
                <img src="{{ "/images/logo.png" | prepend: site.baseurl }}">
            </div>
            <form>
              <h4 class="title">Create New Password</h4>
              <div class="form-group has-icon">
                <span class="icon icon-eye-off toggle-password"></span>
                <input type="password" class="form-control" placeholder="Enter new password">
              </div>
              <div class="form-group has-icon">
                <span class="icon icon-eye-off toggle-password"></span>
                <input type="password" class="form-control" placeholder="Confirm new password">
              </div>
              <button type="submit" class="btn btn-primary w3-new-pwd-form-btn"> 
                Continue
                <span class="icon icon-arrow-right "></span>
              </button>
            </form>
        </div>
    </div>
</div>