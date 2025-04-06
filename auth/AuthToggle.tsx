interface AuthToggleProps {
    isLogin: boolean;
    onToggle: () => void;
  }
  
  export function AuthToggle({ isLogin, onToggle }: AuthToggleProps) {
    return (
      <div className="mt-6 text-center text-sm">
        {isLogin ? (
          <p className="text-muted-foreground">
            Don't have an account?{" "}
            <button
              type="button"
              className="text-primary hover:underline"
              onClick={onToggle}
            >
              Sign Up
            </button>
          </p>
        ) : (
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <button
              type="button"
              className="text-primary hover:underline"
              onClick={onToggle}
            >
              Sign In
            </button>
          </p>
        )}
      </div>
    );
  }
  