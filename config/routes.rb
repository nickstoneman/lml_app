Rails.application.routes.draw do 
  get 'controller/ACTION' => 'controller#ACTION'
  root	'static_pages#home'
  	get 'about'		=>	'static_pages#about'
  	get 'contact'	=>	'static_pages#contact'
  	get 'signup' 	=> 	'users#new'
  		resources :users
  
  # Login Pages
  	get 'login' 	=> 'login_page#login'

  # Route for sample pages
  	get 'controller/ACTION' => 'controller#ACTION'
  	
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
