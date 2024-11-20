class ChatbotController < ApplicationController
    def respond
      service = DialogflowService.new(session[:user_id])
      response = service.detect_intent(params[:message])
      render json: { reply: response }
    end
  end
  