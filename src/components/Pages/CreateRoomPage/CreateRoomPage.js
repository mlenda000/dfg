const CreateRoomPage = () => {
  return (
    <div className="create-room-page">
      <h1>Create Room</h1>
      <form>
        <label>
          Room Name:
          <input type="text" name="roomName" />
        </label>
        <label>
          Description:
          <textarea name="description"></textarea>
        </label>
        <button type="submit">Create Room</button>
      </form>
    </div>
  );
};
export default CreateRoomPage;
