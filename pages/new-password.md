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
                <div class="text-center">
                    <button type="button" class="btn btn-primary btn-blue btn-xlg radius-50">Continue <i class="icon-arrow-right"></i></button>
                </div>
            </form>
        </div>
    </div>
</div>