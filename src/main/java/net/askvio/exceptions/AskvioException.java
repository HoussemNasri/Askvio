package net.askvio.exceptions;

public class AskvioException extends RuntimeException {
    public AskvioException(String message) {
        super(message);
    }

    public AskvioException() {
        super();
    }
}
