import notesStore from '../stores/notesStore';
import './CreateForm.css';

export default function CreateForm() {
  const store = notesStore();

  if (store.updateForm._id) return <></>;

  const handleEventItemChange = (index, e) => {
    const { name, value } = e.target;
    store.updateCreateFormEventItem(index, name, value);
  };

  const handleItemPriceChange = (index, e) => {
    const { name, value } = e.target;
    store.updateCreateFormEventItem(index, name, value);
  };

  return (
    <div className="create-form-container">
      <h2 className="create-form-title">Create an Event</h2>
      <form className="create-form" onSubmit={store.createNote}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            id="title"
            type="text"
            className="form-control"
            onChange={store.updateCreateFormField}
            value={store.createForm.title}
            name="title"
            placeholder="Event Title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate" className="form-label">
            Start Date:
          </label>
          <input
            id="startDate"
            type="date"
            className="form-control"
            onChange={store.updateCreateFormField}
            value={store.createForm.startDate}
            name="startDate"
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate" className="form-label">
            End Date:
          </label>
          <input
            id="endDate"
            type="date"
            className="form-control"
            onChange={store.updateCreateFormField}
            value={store.createForm.endDate}
            name="endDate"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            id="description"
            className="form-control description-box"
            onChange={store.updateCreateFormField}
            value={store.createForm.description}
            name="description"
            placeholder="Event Description"
            rows={Math.max(
              Math.ceil(store.createForm.description.length / 50),
              3
            )} // adjust 50 as needed to fit your use case
          />
        </div>
        <div className="form-group">
          <label htmlFor="image" className="form-label">
            Image:
          </label>
          <input
            id="image"
            type="file"
            className="form-control-file"
            onChange={store.handleImageChange}
            name="image"
          />
        </div>
        <div className="form-group">
          <label htmlFor="itemName" className="form-label">
            Item Name:
          </label>
          <input
            id="itemName"
            type="text"
            className="form-control"
            onChange={(e) => handleEventItemChange(0, e)}
            value={store.createForm.eventItems[0].itemName}
            name="itemName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="itemPrice" className="form-label">
            Item Price:
          </label>
          <input
            id="itemPrice"
            type="text"
            className="form-control"
            onChange={(e) => handleItemPriceChange(0, e)}
            value={store.createForm.eventItems[0].itemPrice}
            name="itemPrice"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          CREATE EVENT
        </button>
      </form>
    </div>
  );
}
