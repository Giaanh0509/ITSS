package com.example.project.exception;

public class AddFoodFailException extends RuntimeException {
    public AddFoodFailException(String message, Throwable cause) {
        super(message, cause);
    }

    public AddFoodFailException(String message) {
        super(message);
    }
}
