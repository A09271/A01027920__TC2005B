using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class SimonScores : MonoBehaviour
{
    [SerializeField] TMP_Text scoreText;

    // Start is called before the first frame update
    void Start()
    {
        int score = PlayerPrefs.GetInt("score", 0);
        scoreText.text = "Score: " + score;
    }

    public void NewGame(){
        UnityEngine.SceneManagement.SceneManager.LoadScene("Simondice");
    }
    // Update is called once per frame
    void Update()
    {
        
    }
}
