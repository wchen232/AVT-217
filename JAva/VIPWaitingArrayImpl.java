public class VIPWaitingArrayImpl implements WaitingArrayInterface{
  private int entryIndex;
  private Array loopArray;
  private int initialCapacity;

  public VIPWaitingArrayImpl(){

  }

  public VIPWaitingArrayImpl(int capacity){
    this.loopArray = Object[capacity];
    this.entryIndex = 0;
    this.initialCapacity = capacity;
  }

  public void add(G element);
  public G remove() throws EmptyWaitingArrayException;
  public void clear() throws EmptyWaitingArrayException;
  public G getFirst() throws EmptyWaitingArrayException;
  public G getLast() throws EmptyWaitingArrayException;
  public boolean isEmpty();
  public boolean isFull();
  public String toString();

  private void resizeCapacity(){

  }

  @Override public String toString(){

  }
}
