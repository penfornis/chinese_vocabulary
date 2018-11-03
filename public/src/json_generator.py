# -*- coding: utf-8 -*-
"""
Created on Sun Oct 21 15:48:07 2018

@author: arnau
"""
import jsonpickle
import json
import pickle
import os




PATH_PICKLE = "../res/"
PATH_AUDIO = "../audio/"
def path_to_audio_changer(vocabulary_list, num):
	for vocabulary in vocabulary_list:
		print("old path : %s"% (vocabulary["sound_file"]))
		vocabulary["sound_file"] = PATH_AUDIO+"hsk%d/%s"%(num,vocabulary["sound_file"])
		print("new path%s"% (vocabulary["sound_file"] ))
	return vocabulary_list

def load_list_pickle(num):
    word_list = pickle.load(open( PATH_PICKLE+'hsk%s.pkl'%(num), "rb" ))
    print(word_list)
    return word_list

def save_list_json(word_list,name_list,num):
    with open("../res/%s"%(name_list), "w") as f:
            f.write(jsonpickle.dumps(word_list))
	#jsonpickle.encode
	#pickle.dump(word_list,open('hsk'+str(num)+'.pkl', "wb" ))


def main():
	for i in range(1,6):
		word_list = load_list_pickle(i)
		word_list = path_to_audio_changer(word_list,i)
		print(word_list)
		name_list = "hsk_%d.json"%(i)
		save_list_json(word_list,name_list,i)


if __name__ == '__main__':
	main()





