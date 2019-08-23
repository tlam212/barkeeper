class DrinksController < ApplicationController


    def index
      drinks = Drink.all
      render json: drinks
    end


    def show
      render json: Drink.find_by(params[:id])
    end

    def create
      new_drink = Drink.create(drink_params)
      render json: new_drink
    end


    private


    def drink_params
      params.require(:drink).permit(:name, :recipe, :image)
    end






















end
