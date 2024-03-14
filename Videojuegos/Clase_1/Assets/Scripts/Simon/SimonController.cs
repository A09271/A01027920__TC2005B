/*
Script para generar una sequencia de botones y luego comparar los inputs
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SimonController : MonoBehaviour
{
    [SerializeField] List<int> sequence; //SerializedField para que sólo unity lo vea
    [SerializeField] GameObject[] buttons;

    bool playerTurn = false;

    int index;

    int level;
    // Start is called before the first frame update
    void Start()
    {
        NewGame();
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void NewGame()
    {
        sequence = new List<int>();
        index = 0;
        level = 0;
        AddNumber();
    }

    void AddNumber()
    {
        playerTurn = false;
        index = 0;
        int num = Random.Range(0, buttons.Length);
        sequence.Add(num);
        StartCoroutine(ShowSequence());
    }

    IEnumerator ShowSequence()
    {
        for (int i = 0; i < sequence.Count ; i++)
        {
            int num = sequence[i];
            //Llamar al método del script de botones
            buttons[num].GetComponent<SimonBotton>().Highlight();
            yield return new WaitForSeconds(1);
        }
        playerTurn = true;
    }

    public void ButtonSelect(int buttonID)
    {
        if (playerTurn)
        {
            buttons[buttonID].GetComponent<SimonBotton>().Highlight();
            //Debug.Log("Pressed: "+ buttonID + " Should be: " + sequence[index]);
            if (sequence[index] == buttonID){
                index++;
                if (index == sequence.Count)
                {
                    AddNumber();
                    level++;
                    //Para que no se pierda el valor aún cuando cambia de escena
                    PlayerPrefs.SetInt("score", level);
                }
            }
        } else {
            Debug.Log("Game Over");
            UnityEngine.SceneManagement.SceneManager.LoadScene("SimonScore");
        }
    }
}
