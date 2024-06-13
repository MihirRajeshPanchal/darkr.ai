from flask import Flask, jsonify, request , send_file, make_response, Response
from flask_cors import CORS
from dotenv import load_dotenv
from rich.console import Console
import os
from gradio_client import Client, file
from transformers import BlipProcessor, BlipForConditionalGeneration
from PIL import Image