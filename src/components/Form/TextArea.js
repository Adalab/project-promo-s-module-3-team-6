import { type } from "@testing-library/user-event/dist/type"

const TextArea = () => {

    return (
        <textarea
              required
              maxLength='200'
              className="form--project__textarea"
              type="text"
              placeholder="Descripción"
              name="desc"
              id="desc"
              value={data.desc}
              onChange={handleInputs}
            ></textarea>

    )
}

export default TextArea


