const InputWithLabel = ({ ... }) => (
    <>
    <label htmlFor={id}>{children}</label>
    &nbsp;
    <input
    id={id}
    type={type}
    value={value}
    autoFocus
    onChange={onInputChange}
    />
    </>
    );
    