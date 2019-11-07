public class WaitingLoopArrayImpl < G > implements WaitingArrayInterface{
  private int entryIndex;
  private int exitIndex;
  private int initialCapacity;
  private Object[] loopArray;

  public WaitingLoopArrayImpl(){
    this(0);
  }

  public WaitingLoopArrayImpl(int capacity){
    this.loopArray = Object[capacity];
    this.initialCapacity = capacity;
    this.entryIndex = capacity;
    this.exitIndex = 0;
  }

  public void add(G element){
    if(entryIndex = loopArray.length){
      loopArray[0] = element;
      entryIndex = 0;
    }
    else {
      loopArray[entryIndex + 1] = element;
      entryIndex ++;
    }
  }

  public G remove() throws EmptyWaitingArrayException{
      loopArray[exitIndex] = null;
  }

  public void clear() throws EmptyWaitingArrayException{
      for(int i = 0; i < loopArray.length ;i++){
        loopArray[i] = null;
      }
  }
  public G getFirst() throws EmptyWaitingArrayException{
    
  }
  public G getLast() throws EmptyWaitingArrayException;
  public boolean isEmpty(){
    if(exitIndex == null){
      return false;
    }
    else{
      return true;
    }
  }
  public boolean isFull(){
    if(){
      return true;
    }
  };
  public String toString(){

  }

  private void resizeCapacity(){
    Object[] = new Object[loopArray.length*2];
    for(int i = 0; i < loopArray.length;i++){

    }
  }

  @Override public String toString() {

  }
}
