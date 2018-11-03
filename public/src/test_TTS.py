# -*- coding: utf-8 -*-
"""
Created on Sun Oct 14 15:37:50 2018

@author: linaro
"""
from gtts import gTTS
from gtts import lang
import os
import pickle
#from pygame import mixer

import vlc


def open_hsk(num):
    file_name = "hsk"+str(num)+".txt"    
    with open(file_name) as f:
        hsk_str = f.read()
    hsk_list = hsk_str.split('\n')
    word_list = []
    
    for i,line in enumerate(hsk_list,1):
        
        elements = line.split('\t')
        if len(elements)< 5:
            print("line %d empty"%(i))            
            continue
        print("character%d"%(i))
        print(elements[0])
        
        sound_file = 'hsk'+str(num)+'char'+str(i)+" "+elements[0]+'.mp3'
        tts = gTTS(elements[0],lang='zh-cn')
        
        tts.save(sound_file)
        word = { 
        "character" : elements[0],
        "pinyin" : elements[3],
        "meaning" : elements[4],
        "sound_file": sound_file
        }
        word_list.append(word)
    print(word_list[42])
    pickle.dump(word_list,open('hsk'+str(num)+'.pkl', "wb" ))
    return word_list
#print(lang.tts_langs())

def word_to_mp3(word):
    tts = gTTS(word,lang='zh-cn')
    tts.save('chinois.mp3')



def load_list_pickle(num):
    word_list = pickle.load(open( 'hsk'+str(num)+'.pkl', "rb" ))
    return word_list
def play_sound(file_name):
    #tts = gTTS('北京',lang='zh-cn')
    #tts.save('北京.mp3')
    #mixer.init()
    #mixer.load('北京.mp3')
    #mixer.play()

    p = vlc.MediaPlayer(file_name)
    p.play()

    
    
    
if __name__ == '__main__':
    
   
    word_list = load_list_pickle(1)
    print(word_list)
    word = word_list[15]
    print(word["character"])
    play_sound(word["sound_file"])
