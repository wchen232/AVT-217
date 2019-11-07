public interface WaitingArrayInterface <G>{
  public void add(G element);
  public G remove() throws EmptyWaitingArrayException;
  public void clear() throws EmptyWaitingArrayException;
  public G getFirst() throws EmptyWaitingArrayException;
  public G getLast() throws EmptyWaitingArrayException;
  public boolean isEmpty();
  public boolean isFull();
  public String toString();
}
