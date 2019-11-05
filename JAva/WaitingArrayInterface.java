public interface WaitingArrayInterface{
  void add(element);
  remove() throws EmptyWaitingArrayException;
  void clear() throws EmptyWaitingArrayException;
  getFirst() throws EmptyWaitingArrayException;
  getLast() throws EmptyWaitingArrayException;
  public boolean isEmpty();
  public boolean isFull();
  public String toString();
}
