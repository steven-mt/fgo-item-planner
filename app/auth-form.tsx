export default function AuthForm() {
  return (
    <>
      <div className="flex w-full flex-col items-center">
        <form
          className="w-60 border-black bg-gray-200 text-center"
          action="/auth-server/login"
          method="post"
        >
          <label htmlFor="email">Email</label>
          <input className="w-full bg-gray-200" name="email" required />
          <button>Sign In</button>
        </form>
      </div>
    </>
  );
}
