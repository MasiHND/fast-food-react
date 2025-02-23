function SubmitButton({children, disabled}) {
    return (
        <button disabled={disabled} className="button">
            {children}
        </button>
    )
}

export default SubmitButton
