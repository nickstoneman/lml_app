Rails.application.routes.draw do 
  get 'sessions/new'

  get 'controller/ACTION' => 'controller#ACTION'
    root	               'static_pages#home'
  	get    'about'		=> 'static_pages#about'
  	get    'contact'	=> 'static_pages#contact'
  	get    'signup' 	=> 'users#new'
    get    'login'    => 'sessions#new'
    post   'login'    => 'sessions#create'
    delete 'logout'   => 'sessions#destroy'
  		resources :users

  # Route for sample pages
  get 'controller/ACTION' => 'controller#ACTION'
  	
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
