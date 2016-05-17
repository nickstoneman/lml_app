Rails.application.routes.draw do
  
  get 'controller/ACTION' => 'controller#ACTION'
root 'static_pages#home' 
  get 'static_pages/about'
  get 'static_pages/contact'

  get 'register_page/register' => 'register_page#register'
  get 'login_page/login' => 'login_page#login'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
