function SubmitButton({children, disabled}) {
    return (
        <button disabled={disabled} className="submitButton">
            {children}
        </button>
    )
}

export default SubmitButton
