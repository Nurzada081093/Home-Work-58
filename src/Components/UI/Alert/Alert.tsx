import * as React from 'react';

interface IProps extends React.PropsWithChildren {
  type: "primary" | "success" | "danger" | "warning";
  onDismiss?: () => void;
}

const Alert: React.FC<IProps> = ({ type, children, onDismiss }) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      <div className="d-flex justify-content-between">
        <div>{children}</div>
          {onDismiss !== undefined ? (
            <button
              type="button"
              className="border-0 bg-transparent"
              onClick={onDismiss}
            >
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/color/48/delete-sign--v1.png"
                alt="delete-sign--v1"
              />
            </button>
          ) : null}
      </div>
    </div>
  );
};

export default Alert;
