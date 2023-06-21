import React from "react";

export const Success = ({ count, onClickSendInvites, setInvites }) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Successfully!</h3>
      <p>An invitation has been sent to all {count} users.</p>
      <button
        onClick={() => {
          onClickSendInvites();
          setInvites([]);
        }}
        className="send-invite-btn"
      >
        Back
      </button>
    </div>
  );
};
