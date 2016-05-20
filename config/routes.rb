Rails.application.routes.draw do 
  root				'static_pages#home'
  get 'about'	=>	'static_pages#about'
  get 'contact'	=>	'static_pages#contact'

  
  	get 'controller/ACTION' => 'controller#ACTION'

  # Static Login Pages
  	get 'register' => 'register_page#register'
  	get 'login' => 'login_page#login'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
