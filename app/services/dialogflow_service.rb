class DialogflowService
    def initialize(session_id)
      @session_id = session_id
      @client = Google::Cloud::Dialogflow.sessions
      @project_id = "amazingstorebot-nyjx" # Aquí va tu project_id
    end
  
    def detect_intent(text)
      session = @client.session_path @project_id, @session_id
      query_input = { text: { text: text, language_code: "es" } }
      response = @client.detect_intent session: session, query_input: query_input
      response.query_result.fulfillment_text
    end
  end
  